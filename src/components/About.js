import Accordion from 'react-bootstrap/Accordion';

export default function About(props) {

    return (
        <div className="p-3 container" style={{ background: props.mode === "light" ? "white" : "#042743", color: props.mode === "light" ? "black" : "white" }}>
            <h1 className="my-3">About us</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" style={{ background: props.mode === "light" ? "white" : "#042743", color: props.mode === "light" ? "black" : "white" }}>
                    <Accordion.Button style={{ background: props.mode === "light" ? "white" : "#042743", color: props.mode === "light" ? "black" : "white" }}>About TextUtils</Accordion.Button>
                    <Accordion.Body>
                        We empower teams and individuals to accelerate repetitive tasks and deliver a personal touch in business communications.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{ background: props.mode === "light" ? "white" : "#042743", color: props.mode === "light" ? "black" : "white" }}>
                    <Accordion.Button style={{ background: props.mode === "light" ? "white" : "#042743", color: props.mode === "light" ? "black" : "white" }}>My details</Accordion.Button>
                    <Accordion.Body>
                        Name: Pavan Kumar E T<br />
                        Mobile: 2345346757<br />
                        Mail: xyz@gmail.com
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}