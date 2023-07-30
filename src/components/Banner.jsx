import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Banner = () => (
    <div className="banner">
        <Container>
        <Row>
            <Col>
                <div className="intro">
                    <p className="intro__text">Hi, I&apos;m Weronika! 🙋🏼‍♀️</p>
                    <p className="intro__text intro__text--bold">A web developer based in Leeds, UK.</p>
                    <p className="intro__text">Proudly <span className="intro__text intro__text--italics">self-taught</span> & <span className="intro__text intro__text--italics">passionate</span> about crafting captivating websites 🚀</p>
                    {/* <p className="intro__text intro__text--italics">I&apos;m a web developer currently based in Leeds, UK.</p>
                    <p className="intro__text intro__text--italics">I&apos;m a web developer currently based in Leeds, UK.</p> */}
                </div>
            </Col>
        </Row>
        </Container>
</div>
);

export default Banner