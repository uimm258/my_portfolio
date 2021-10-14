import uniqid from 'uniqid'
import { workExp } from '../../portfolio'
import WorkContainer from '../WorkContainer/WorkContainer'
import './WorkExp.css'

const WorkExp = () => {
    if (!workExp.length) return null

    return (
        <section id='workExp' className='section workExp'>
            <h2 className='section__title'>Work Experience</h2>

            <div className='workExp__grid'>
                {workExp.map((work) => (
                    <WorkContainer key={uniqid()} work={work} />
                ))}
            </div>
        </section>
    )
}

export default WorkExp
