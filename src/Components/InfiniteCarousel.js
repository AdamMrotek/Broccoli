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

export default function InfiniteCarousel({ children }) {
  const containterRef = useRef();
  const navbarRef = useRef();
  const [current, setCurrent] = useState(2);
  const [lockSlider, setLockSlider] = useState(false);
  const [translateX, setTranslateX] = useState(2);

  const navigateHandler = (slide) => {
    containterRef.current.style.transitionDuration = "600ms";
    setCurrent(slide);
    setTranslateX(containterRef.current.clientWidth * slide - halfFlexGap);
    setCurrentUi(slide);
  };
  const setCurrentUi = (slide, alternativeSlide) => {
    const listOfSlides = Array.from(containterRef.current.childNodes);
    const listOfNavDots = Array.from(navbarRef.current.childNodes);
    listOfSlides.forEach((slide) => slide.classList.remove("current-slide"));
    listOfNavDots.forEach((dot) => dot.classList.remove("current-dot"));

    listOfNavDots[slide - 2].classList.add("current-dot");
    listOfSlides[slide].classList.add("current-slide");
    if (alternativeSlide) {
      listOfSlides[alternativeSlide].classList.add("current-slide");
    }
  };
  const moveSlides = (mode) => {
    if (lockSlider) return;
    containterRef.current.style.transitionDuration = "600ms";
    // listOfSlides.forEach((slide) => slide.classList.remove("current-slide"));
    if (mode === "prev") {
      if (current <= 2) {
        setTranslateX(containterRef.current.clientWidth - halfFlexGap);
        setCurrent(children.length + 1);
        setCurrentUi(children.length + 1, 1);
      } else {
        setTranslateX(
          containterRef.current.clientWidth * (current - 1) - halfFlexGap
        );
        setCurrent((prev) => --prev);
        setCurrentUi(current - 1);
      }
    } else if (mode === "next") {
      if (current >= children.length + 1) {
        setTranslateX(
          containterRef.current.clientWidth * (current + 1) - halfFlexGap
        );
        setCurrent(2);
        setCurrentUi(2, children.length + 2);
      } else {
        setTranslateX(
          containterRef.current.clientWidth * (current + 1) - halfFlexGap
        );
        setCurrent((next) => ++next);
        setCurrentUi(current + 1);
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
      return [
        <li key={children.length + 2} className="slides">
          {children[children.length - 2]}
        </li>,
        <li key={children.length + 1} className="slides">
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length + 4} className="slides">
          {children[0]}
        </li>,
        <li key={children.length + 3} className="slides">
          {children[1]}
        </li>,
      ];
    }
  }, [children]);

  useLayoutEffect(() => {
    setTranslateX(containterRef.current.clientWidth * current - halfFlexGap);
    setCurrentUi(2);
  }, []);

  useEffect(() => {
    const transitionEnd = (e) => {
      if (e.target !== containterRef.current) return;
      setLockSlider(false);
      if (current <= 2) {
        containterRef.current.style.transitionDuration = "0ms";
        setTranslateX(containterRef.current.clientWidth * 2 - halfFlexGap);
      }
      if (current >= children.length + 1) {
        containterRef.current.style.transitionDuration = "0ms";
        setTranslateX(
          containterRef.current.clientWidth * (children.length + 1) -
            halfFlexGap
        );
      }
    };
    const transitionStart = (e) => {
      if (e.target !== containterRef.current) return;
      if (current <= 2 || current >= children.length + 1) {
        setLockSlider(true);
      }
    };
    containterRef.current.addEventListener("transitionstart", transitionStart);
    containterRef.current.addEventListener("transitionend", transitionEnd);
    return () => {
      if (containterRef.current) {
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
    <section className="whole-carousel">
      <button
        onClick={() => moveSlides("prev")}
        className=" btn chevron chevron__left"
      >
        &#60;
      </button>
      <button
        onClick={() => moveSlides("next")}
        className=" btn chevron chevron__right"
      >
        {" "}
        &#62;
      </button>
      <div className="trim-window">
        <div className="carousel">
          <ul
            ref={containterRef}
            className="carousel__container"
            style={{
              transform: `translate3d(${-translateX}px, 0 , 0)`,
            }}
          >
            {slides}
          </ul>
          <ul className="carousel__navbar" ref={navbarRef}>
            {slides.slice(4).map((slide, i) => (
              <li
                key={i}
                onClick={() => navigateHandler(i + 2)}
                className={`carousel__navbar__dot`}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
