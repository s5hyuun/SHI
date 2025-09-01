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



            <Card.Body>
                <Card.Title className={styles.title}>{props.name}</Card.Title>
                <Card.Text className={styles.text}>
                    {props.comment}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>

        </div>
    )
}
export default Comment;