import styles from './Comment.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Comment(props) {
    return (
        <div className={styles.wrapper}>
            <div>
                <img
                    src="http://ggoreb.com/images/Portrait_Placeholder.png"
                    className={styles.image}
                />
            </div>


            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.comment}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Comment;