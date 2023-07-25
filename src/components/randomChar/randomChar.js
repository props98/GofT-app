import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {

  constructor() {
    super();
    this.updateChararcter();
  }

  gotService = new gotService();

  state = {
    character: {},
    loading: true,
    error: false
  }

  onCharLoaded = (character) => {
    this.setState({
      character,
      loading: false
    })
  }

  onError = (error) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateChararcter() {
    const id = 130000;
    // const id = Math.floor(Math.random() * 140 + 25); // диапозон 25-140
    this.gotService.getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

  render() {

    const {character, loading, error }= this.state;

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View character={character}/> : null;

    return (
      <div className="random-block rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const View = ({character}) => {

  const {name, gender, born, died, culture} = character;

  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  )
}