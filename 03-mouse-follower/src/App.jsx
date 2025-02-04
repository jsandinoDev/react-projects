import { useEffect, useState } from "react"


const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })


    // pointer move
    useEffect(() => {

        // effect
        // console.log('efect')
        const handleMove = (event) => {
            const { clientX, clientY } = event
            // console.log('handlemove', { clientX, clientY })
            setPosition({ x: clientX, y: clientY })
        }
        if (enabled) {
            window.addEventListener('pointermove', handleMove)
        }

        // clean useEffect
        // when the component desmount
        // when dependencies change
        return () => {
            window.removeEventListener('pointermove', handleMove)
        }

    }, [enabled])

    // change body class
    useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled)

        return () => {
            document.body.classList.remove('no-cursor')
        }
    }, [enabled])


    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid #fff',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -25,
                top: -25,
                width: 50,
                height: 50,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}>

            </div>
            <button onClick={() => setEnabled(!enabled)}
            > {enabled ? 'Deactivate' : 'Activate'} mouse follow</button>
        </>
    )
}

function App() {
    return (
        <main>
            <FollowMouse />
        </main>
    )
}

export default App
