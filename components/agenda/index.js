import { Component } from 'react'
import { Card } from 'antd'
import moment from 'moment'
import Section from './Section'

import './style.styl'

export default class Agenda extends Component {
    render() {
        const { agenda: { club, sections, date, startTime } } = this.props

        const meetingSections = [];
        let sectionStartTime = moment(`${date} ${startTime}`)


        sections.forEach((section, ind) => {
            meetingSections.push(
                <Section
                    startTime={sectionStartTime.format('LT')}
                    key={ind}
                    {...section}
                />
            )

            const sectionDuration = section.actions.reduce(
                (total, currentValue) => (
                    total + currentValue.duration
                )
            , 0)

            sectionStartTime.add('minutes', sectionDuration)
        })

        return (
            <div className="agenda">
                <Card
                    style={{ width: 800 }}
                    cover={
                        <img
                            alt="example"
                            src="http://www.toastmasters.org/~/media/B804E22AB7FB45C1989748A70EB15E52.ashx"
                        />
                    }
                >
                    <div className="club-info">{`${club.name} ${club.id}`}</div>
                    {meetingSections}
                    <div>
                        <div className="mission-statement">Club Mission Statement:</div>
                        <div>
                            "We provide a supportive and positive learning
                            experience in which members are empowered to develop
                            communication and leadership skills, resulting in greater
                            self-confidence and personal growth .... and we have fun
                            doing it."
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
