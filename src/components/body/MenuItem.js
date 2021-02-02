import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap"

const MenuItem = (props) => {

    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.name} src={props.dish.image}
                        style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle
                            onClick={props.DishSelect}
                            style={{ cursor: "pointer" }}
                        >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>

                </CardBody>

            </Card>

        </div>
    );

}
export default MenuItem;