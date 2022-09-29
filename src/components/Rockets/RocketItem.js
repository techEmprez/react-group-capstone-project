import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
import { reserveRocket } from '../../redux/rockets/rocketSlice';

const RocketItem = (props) => {
  const { rocket } = props;

  const {
    id, name, description, images, reserved,
  } = rocket;

  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    const { id } = target;
    dispatch(reserveRocket(id));
  };

  return (
    <li className="d-flex my-3 align-items-center" id={id}>
      <img src={images} alt="rocket flickr" className="rocket-img" />
      <div className="content px-3 py-5">
        <h3>{ name }</h3>
        {!reserved ? (
          <>
            <p>{description}</p>
            <Button
              id={id}
              type="button"
              variant="primary"
              onClick={handleClick}
            >
              Reserve Rocket
            </Button>
          </>
        ) : (
          <>
            <p>
              <Badge className="reserved">Reserved</Badge>
              {description}
            </p>

          </>
        )}
      </div>
    </li>
  );
};

RocketItem.defaultProps = {
  rocket: {},
  name: '',
  description: '',
  images: '',
};

RocketItem.propTypes = {
  rocket: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.string,
};

export default RocketItem;
