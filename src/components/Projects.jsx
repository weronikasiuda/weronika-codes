import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Projects = () => {
  return (
    <Container>
        <Row>
            <div className="projects__title-container">
                <Col>
                    <h2 className="projects__title">Where it all started...</h2>
                </Col>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1000" height="1000" viewBox="0 0 1000 1000" xml:space="preserve">
                        <defs>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="#ffffff"/>
                        <g transform="matrix(2.1452 0 0 0.3999 465.8265 538.6523)" id="64418">
                            <path style="stroke: rgb(188,133,255); stroke-width: 18; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 10; is-custom-font: none; font-file-url: none; fill: none; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" transform=" translate(-203.845, -44.22)" d="M 14.2 65.54 s 36 -36.79 56.31 -35.66 s 38.6 27.31 58.13 26.56 s 26.34 -5.91 37.6 -13 s 30.53 -19.52 39.48 -19.14 s 19.48 8.23 31.12 19.87 s 18.91 13.2 25.25 13.16 S 278.24 58 297 40.76 s 25.86 -17.86 31.49 -17.86 s 48.11 15.42 65 13.27" stroke-linecap="round"/>
                        </g>
                    </svg>
            </div>
        </Row>
        <div className="projects__item">
            <Row>
                <Col lg={7}>
                    <div className="projects__text-container">
                        <p className="projects__text"></p>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="projects__image">
                        <Image fluid src="/src/assets/projects/photographer-website.png"></Image>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
  );
};

export default Projects;