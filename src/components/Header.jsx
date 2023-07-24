import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = () => (
<Container>
<Row>
    <Col>
        <div className="logo">
            <span className="logo__element">W</span>
            <span className="logo__element">S</span>
        </div>
    </Col>
</Row>
</Container>

);

export default Header