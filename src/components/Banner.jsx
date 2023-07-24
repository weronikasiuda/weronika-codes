import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';


const Banner = () => (
    <div className="banner">
        <Container>
        <Row>
            <Col>
                <div className="intro">
                    <p className="intro__text">Hi, I&apos;m Weronika! 🙋🏼‍♀️</p>
                    <p className="intro__text intro__text--bold">A web developer currently based in Leeds, UK.</p>
                    <p className="intro__text">Proudly self-taught & passionate about crafting captivating websites 🚀</p>
                    {/* <p className="intro__text intro__text--italics">I&apos;m a web developer currently based in Leeds, UK.</p>
                    <p className="intro__text intro__text--italics">I&apos;m a web developer currently based in Leeds, UK.</p> */}
                </div>
            </Col>
            {/* <Col>
                <Image fluid src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"></Image>
            </Col> */}
        </Row>
        </Container>
</div>
);

export default Banner