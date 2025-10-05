import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const MessageSection = () => {

    useGSAP(() => {
        document.fonts.ready.then(() => {

        const firstMsgSplit = SplitText.create(".first-message", {
            type: "words"
        });

         const secondMsgSplit = SplitText.create(".second-message", {
            type: "words"
        });

           const paragraphMsgSplit = SplitText.create(".message-content p", {
            type: "words lines",
            lineClass: "paragraph-line"
        });

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger:{
                trigger: ".message-content",
                start: "top center ",
                end: "30% center",
                scrub: true,
            }
        })

        gsap.to(secondMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger:{
                trigger: ".second-message",
                start: "top center ",
                 end: "bottom center",
                scrub: true,
            }
        })

        const revalTl = gsap.timeline({
            delay: 1,
            scrollTrigger:{
                trigger: ".msg-text-scroll",
                start : "top 60%",

            }
        })
        revalTl.to(".msg-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.inOut"
        })
        const paraTl = gsap.timeline({
            scrollTrigger:{
                trigger: ".message-content p",
                start : "top center",
            }
        })
        paraTl.from(paragraphMsgSplit.words, {
            yPercent:300,
            rotate:3,
            ease: "power1.inOut",
            stagger: 0.01,
            duration: 1
            
        })
    })
})   

  return (
   <section className='message-content'>
        <div className='container mx-auto flex-center py-28 relative'>
            <div className='w-full h-full'>
                <div className='msg-wrapper'>
                    <h1 className='first-message'>STIR up your FEAERLESS PAST and</h1>

                    <div 
                    style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}} className='msg-text-scroll'>
                        <div className='bg-light-brown md:p-5 p-3 px-5'>
                            <h2 className='text-red-brown'> Feul up</h2>
                        </div>
                    </div>

                    <h1 className='second-message'>
                        your future with ever gulp of perfect protein
                    </h1>
                 </div>

                    <div className='flex-center mt-10 md:mt-20 '>
                        <div className='max-w-md px-10 flex-center overflow-hidden'> 
                            <p> Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.</p>
                        </div>
                  </div>
            </div>
        </div>
   </section>
  )
}

export default MessageSection