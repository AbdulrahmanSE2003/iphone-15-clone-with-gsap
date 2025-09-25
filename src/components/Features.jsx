import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {explore1Img, explore2Img, exploreVideo} from "../utils/index.js";

const Features = () => {
    const videoRef = useRef();

    useGSAP(() =>{
        gsap.to('#exploreVideo', {
            scrollTrigger:{
                trigger:'#exploreVideo',
                start:'-10% bottom',
                toggleActions:'play pause reverse restart',
            },

            onComplete: () =>{
                videoRef.current.play();
            }
        })

        gsap.to('#features_title', {
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:'#features_title',
                start:'top 85%',
                toggleActions:'play none none reverse'
            }
        })

        gsap.to('#forg', {
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:'#forg',
                start:'top 85%',
                toggleActions:'play none none reverse'
            }
        })

        gsap.to('.g-grow',{
            opacity:1,
            scale:1,
            ease:'power1',
            scrollTrigger:{
                scrub: 5.5,
                trigger:'.g-grow',
                start: 'top 85%',
                toggleActions:'play none none reverse'
            }
        })

        gsap.to('.g-text', {
            opacity:1,
            y:0,
            ease:'power2',
            duration:1.2,
            stagger: 0.25,
            scrollTrigger:{
                trigger:'.g-text',
                start: 'top 85%',
                toggleActions:'play none none reverse'
            }
        })
    }, [])

  return (
    <section className="h-full common-padding bg-zinc relative  overflow-hidden">
        <div className="screen-max-width">
            <div className="mb-12 w-full" >
                <h1 id="features_title" className="section-heading">Explore the full story.</h1>
            </div>

            <div id='forg' className="mt-32 mb-24 pl-24 opacity-0 translate-y-[80px]">
                <h2 className="text-5xl lg:text-7xl font-semibold">IPhone.</h2><h2 className="text-5xl lg:text-7xl font-semibold"> Forged in titanium.</h2>
            </div>

            <div className="flex-center flex-col sm:px-10">
                <div className="relative h-[50vh] w-full flex items-center rounded-2xl">
                    <video playsInline id='exploreVideo' className="w-full rounded-t-2xl h-full object-cover object-center" preload='none' muted autoPlay ref={videoRef}>
                        <source src={exploreVideo} type="video/mp4"/>
                    </video>
                </div>

                <div className="flex flex-col w-full relative">
                    <div className="feature-video-container">
                        <div className="overflow-hidden flex-1 h-[50vh]">
                            <img src={explore1Img} alt='titanium'
                                 className="feature-video g-grow"
                            />
                        </div><div className="overflow-hidden flex-1 h-[50vh]">
                            <img src={explore2Img} alt='titanium2'
                                 className="feature-video g-grow"
                            />
                        </div>
                    </div>

                    <div className="feature-text-container">
                        <div className="flex-1 flex-center">
                            <p className="feature-text g-text">
                                IPhone 15 Pro is {'  '}
                            <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium design
                    </span>,
                            using the same alloy that spacecrafts use for missions to Mars.
                            </p>
                        </div><div className="flex-1 flex-center">
                        <p className="feature-text g-text">
                            Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                            <span className="text-white">
                      lightest Pro models ever.
                    </span>
                            You'll notice the difference the moment you pick one up.
                        </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Features;
