import PropTypes from 'prop-types'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { useState } from 'react';

export const Card = ({ username, body, onLikeToggle }) => {

    const [like, setlike] = useState(false)


    const handleClick = () => {
        let newLikeState = !like
        setlike(newLikeState)
        onLikeToggle(newLikeState)
    }
    return (
        <div className='flex flex-wrap border'>
            <div className='w-full max-w-[400px] border p-10 flex items-start space-x-4 gap-2.5"'>

                <div className='flex-1'>
                    <p> <strong> {username}</strong></p>
                    <p>{body}</p>
                </div>

                <div className='flex items-center h-full'>
                    <button onClick={handleClick}>
                        {
                            like ?
                                <IconHeartFilled /> :
                                <IconHeart />

                        }
                    </button>

                </div>

            </div>
        </div>
    )
}

Card.propTypes = {
    username: PropTypes.string,
    body: PropTypes.string,
    onLikeToggle: PropTypes.func,
}
