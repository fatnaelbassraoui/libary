import React from 'react'
import useFetch from '../Hooks/useFetch'
import LoadingIndicator from './LoadingIndicator'
import ForumIcon from '@mui/icons-material/Forum';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

const ModalCommentList = ({ book }) => {

  const url = `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`
  const { data, loading, error } = useFetch(url)
  return (
    <div className='relative mt-8'>
      {loading && !error && <LoadingIndicator />}
      {!data && !loading && error && <p>Oops qualcosa non è andata a buon fine...</p>}
      {data && !error && data.map((comment, index) => {
        console.log(comment);
        return (
          <div key={index} className='flex shadow-sm flex-col bg-white p-2 rounded-lg gap-2 mb-2'>
            <div className="font-bold italic">
              <PersonIcon style={{
                color: '#b2d2cd',
                marginRight: '.5rem'
              }} />
              {comment.author}
            </div>
            <div>
              <ForumIcon style={{
                color: '#b2d2cd',
                marginRight: '.5rem'
              }} />
              {comment.comment}
            </div>
            <div className="font-bold">
              <CalendarMonthIcon style={{
                color: '#b2d2cd',
                marginRight: '.5rem'
              }} />
              {comment.createdAt.slice(0,10)}
            </div>
          </div>
        )

      })}

    </div>
  )
}

export default ModalCommentList