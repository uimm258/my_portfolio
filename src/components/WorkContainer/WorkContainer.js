import uniqid from 'uniqid'
import './WorkContainer.css'

const WorkContainer = ({ work }) => (
    <div className='work'>
        <h3>{work.name}</h3>
        <h6>{work.date}</h6>
        <ul className='work_list'>
            {work.description.split(/\n \r|\n/).map(para =>
                <li key={uniqid()} className='work_description'>{para}</li>
            )}
        </ul>
    </div>
)

export default WorkContainer

