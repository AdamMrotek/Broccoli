import {
  Children,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./InfiniteCarousel.css";
import React from "react";

const halfFlexGap = 25;

export default function SlickSlider({ children }) {
  // console.log(children);
  const containterRef = useRef();
  const [current, setCurrent] = useState(2);
  const [lockSlider, setLockSlider] = useState(false);
  const [translateX, setTranslateX] = useState(2);

  const moveSlides = (direction) => {
    containterRef.current.style.transitionDuration = "500ms";
    // console.log("Current", current);
    // console.log("TranslateX", translateX);
    if (lockSlider) return;
    if (direction === "prev") {
      if (current <= 2) {
        setTranslateX(containterRef.current.clientWidth - halfFlexGap);
        setCurrent(children.length + 1);
      } else {
        setTranslateX(
          containterRef.current.clientWidth * (current - 1) - halfFlexGap
        );
        setCurrent((prev) => --prev);
      }
    } else if (direction === "next") {
      if (current >= children.length + 1) {
        setTranslateX(
          containterRef.current.clientWidth * (current + 1) - halfFlexGap
        );
        setCurrent(2);
      } else {
        setTranslateX(
          containterRef.current.clientWidth * (current + 1) - halfFlexGap
        );
        setCurrent((next) => ++next);
      }
    }
  };

  const slides = useMemo(() => {
    if (children.length > 1) {
      let items = Children.map(children, (child, index) => (
        <li key={index} className={`slides `}>
          {child}
        </li>
      ));
      // console.log(items);
      return [
        <li key={children.length + 2} className="slides">
          {children[children.length - 2]}
        </li>,
        <li key={children.length + 1} className="slides">
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length} className="slides">
          {children[0]}
        </li>,
        <li key={children.length + 3} className="slides">
          {children[1]}
        </li>,
      ];
    }
    // console.log(children.length > 1);
  }, [children]);
  useLayoutEffect(() => {
    setTranslateX(containterRef.current.clientWidth * current - halfFlexGap);
  }, []);
  useLayoutEffect(() => {
    const listOfSlides = Array.from(
      document.querySelector(".carousel__container").childNodes
    ).map((slide) => slide.childNodes[0]);
    // console.log("newSlides", listOfSlides);
    listOfSlides.forEach((slide) => slide.classList.remove("current-slide"));
    if (current <= 2) {
      listOfSlides[1].classList.add("current-slide");
      listOfSlides[listOfSlides.length - 3].classList.add("current-slide");
    }
    listOfSlides[current].classList.add("current-slide");
  }, [current]);
  useEffect(() => {
    containterRef.current.style.transitionDuration = "500ms";
    const transitionEnd = (e) => {
      if (e.target !== containterRef.current) return;
      // console.log("transitionEnd");
      setLockSlider(false);
      if (current <= 2) {
        // console.log("transitionX set to the end");
        // console.log("current in <=2", current);
        // console.log(containterRef.current.style);
        containterRef.current.style.transitionDuration = "0ms";
        setTranslateX(containterRef.current.clientWidth * 2 - halfFlexGap);
      }
      if (current >= children.length + 1) {
        // console.log("transitionX set to the start");
        // console.log("current in => length", current);
        containterRef.current.style.transitionDuration = "0ms";
        setTranslateX(
          containterRef.current.clientWidth * (children.length + 1) -
            halfFlexGap
        );
      }
    };
    const transitionStart = (e) => {
      console.log("ADDING EVENT");
      if (e.target !== containterRef.current) return;
      if (current <= 2 || current >= children.length + 1) {
        // console.log("locking app");
        setLockSlider(true);
      }
    };
    console.log("attaching event");
    containterRef.current.addEventListener("transitionstart", transitionStart);
    containterRef.current.addEventListener("transitionend", transitionEnd);
    return () => {
      if (containterRef.current) {
        console.log("removing event");
        containterRef.current.removeEventListener(
          "transitionstart",
          transitionStart
        );
        containterRef.current.removeEventListener(
          "transitionend",
          transitionEnd
        );
      }
    };
  }, [current, children]);
  return (
    <section className="carousel">
      <button
        onClick={() => moveSlides("prev")}
        className="chevron chevron__left"
      >
        &#60;
      </button>
      <ul
        ref={containterRef}
        className="carousel__container"
        style={{
          transform: `translate3d(${-translateX}px, 0 , 0)`,
        }}
      >
        {slides}
      </ul>
      <button
        onClick={() => moveSlides("next")}
        className="chevron chevron__right"
      >
        {" "}
        &#62;
      </button>
      <ul className="carousel__navbar">
        {slides.map((slide, i) => (
          <li className={`.carousel__navbar`}></li>
        ))}
      </ul>
    </section>
  );
}
