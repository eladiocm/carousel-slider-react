import { useEffect, useState } from 'react'

export default function Carousel({ images, autoPlay, showButtons = true }) {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (autoPlay || !showButtons) {
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, images)
            }, 2000)
            return () => clearInterval(interval)
        }
    })

    const selectNewImage = (index, image, next = true) => {
        setLoader(false)
        setTimeout(() => {
            const condition = next
                ? index < images.length - 1
                : index > 0

            const nextIndex = next
                ? (condition
                    ? index + 1
                    : 0)
                : condition
                    ? index - 1
                    : image.length - 1

            setSelectedImage(images[nextIndex])
            setSelectedIndex(nextIndex)
        }, 500)
    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, images)
    }

    return (
        <section className='slider-image'>
            <img
                src={`../../public/${selectedImage}`}
                alt="Imagen de motos "
                onLoad={() => setLoader(true)}
                className={loader ? "loader" : ""}
            />
            {showButtons &&
                <div>
                    <button onClick={previous}>{'<'}</button>
                    <button onClick={next}>{'>'}</button>
                </div>}

        </section>
    )
}