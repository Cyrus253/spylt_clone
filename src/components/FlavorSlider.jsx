import { useGSAP } from '@gsap/react'
import { flavorlists } from '../constants'
import gsap from 'gsap'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const FlavorSlider = () => {
    const sliderRef = useRef()
    const isTablet = useMediaQuery({
        query: "(max-width: 1024px)",
    })

    useGSAP(() => {
        const scrollAmout = sliderRef.current.scrollWidth - window.innerWidth;

        if(!isTablet){
            
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "2% top",
                end: `+=${scrollAmout +1500}px`,
                pin: true,
                scrub: true,

            }
        })
        tl.to(".flavor-section", {
            x: `-${scrollAmout + 1500}px`,
            ease: "power1.inOut"
        })
        }

        const titleTl = gsap.timeline({
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top top",
                end:"bottom 80%",
                scrub:true,
            }
        })
        titleTl.to(".first-text-split", {
            xPercent:-30,
            ease:"power1.inOut",
        })
        .to(".flavor-text-scroll",{
            xPercent:-22,
            ease:"power1.inOut",
        },"<")
        .to(".second-text-split",{
            xPercent:-10,
            ease:"power1.inOut",
        },"<")

    })


    return (
        <div ref={sliderRef} className='slider-wrapper'>
            <div className="flavors">
                {flavorlists.map((flavor) => (
                    <div
                        key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
                    >
                        <img src={`/images/${flavor.color}-bg.svg`} alt="bg-img" className='absolute bottom-0' />

                        <img src={`/images/${flavor.color}-drink.webp`} alt="drink"
                            className='drinks' />

                        <img src={`/images/${flavor.color}-elements.webp`} alt=""
                            className='elements' />

                        <h1>{flavor.name}</h1>

                    </div>
                ))}
            </div>
        </div>
    )

}

export default FlavorSlider