import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className='progress_box' key={index}>
            {/* npm install --save react-circular-progressbar */}
            {/* <div className='progress_cirlcle'>
              <CircularProgressbar
                strokeWidth={7.5}
                text={`${percentage}`}
                value={percentage}
              ></CircularProgressbar> */}
            {/* </div> */}
            <div
              className='progress-circle'
              style={{
                position: 'absolute',
                inset: '30px',
                zIndex: '3',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h3 className='skills_title'>{title}</h3>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default Skills
