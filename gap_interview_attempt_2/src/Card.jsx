import React, { useState } from 'react'
import { IconHeartFilled, IconHeart } from '@tabler/icons-react'

export const Card = ({ username, comment, onToogleLike }) => {

    const [like, setLike] = useState(false)


    const handleClikc = () => {
        let newState = !like
        setLike(newState)
        onToogleLike(newState)
    }
    return (
        <>
            <div style={{
                minWidth: '200px',
                maxWidth: '500px',
                display: 'flex',
                flexDirection: 'row', // horizontal layout (2 columns)
                alignContent: 'flex-start',
                justifyContent: 'space-between', // space between columns
                padding: '10px',
                gap: '10px'
            }}>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    <h3>
                        {username}
                    </h3>
                    <p>
                        {comment}
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <button onClick={handleClikc}>
                        {
                            like ? <IconHeartFilled /> : <IconHeart />
                        }
                    </button>
                </div>

            </div>
        </>
    )
}


