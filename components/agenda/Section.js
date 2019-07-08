import { List } from 'antd'
import { Row, Col } from 'antd'
import Action from './Action'

 const Section = ({lead, title, actions, startTime}) => {
    return (
        <Row>
            <Col span={3}>
                <div className="section-start-time">
                    {startTime}
                </div>
            </Col>
            <Col span={21}>
                <List
                    header={<SectionHeader title={title} lead={lead} />}
                    dataSource={actions}
                    renderItem={item => (
                        <List.Item>
                            <Action {...item} />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    )
}

const SectionHeader = ({lead, title}) => {
    return (<div>
        <span className="section-title">{title}</span>
        <span className="section-lead">{`${lead.firstName} ${lead.lastName}`}</span>
    </div>)
}

export default Section
