import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="nav-modal-cont">
        <a onClick={this.toggle}>Auteurs</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
		<ModalHeader toggle={this.toggle}>Auteurs</ModalHeader>
          <ModalBody>
            <ul>
				<li><a href="https://www.geminithefilm.com/" target="_blank">Aaron Katz</a></li>
				<li><a href="https://www.bordermovie.us/" target="_blank">Ali Abbasi</a></li>
				<li><a href="http://badbatchfilm.com/" target="_blank">Ana Lily Amirpour</a></li>
				<li><a href="https://www.voxluxmovie.com/" target="_blank">Brady Corbet</a></li>
				<li><a href="https://www.revengefilm.com/" target="_blank">Coralie Fargeat</a></li>
				<li><a href="http://www.itonyamovie.com/" target="_blank">Craig Gillespie</a></li>
				<li><a href="">Eliza Hittman</a></li>
				<li><a href="">Harmony Korine</a></li>
				<li><a href="https://www.borgvsmcenroemovie.com/" target="_blank">Janus Metz</a></li>
				<li><a href="">John Chester</a></li>
				<li><a href="http://riskfilm.org/" target="_blank">Laura Poitras</a></li>
				<li><a href="http://www.ingridgoeswestfilm.com/" target="_blank">Matt Spicer</a></li>
				<li><a href="http://sheiscolossal.com/" target="_blank">Nacho Vigalondo</a></li>
				<li><a href="http://www.monstersandmenfilm.com/" target="_blank">Reinaldo Marcus Green</a></li>
				<li><a href="https://www.assassinationnationmovie.com/" target="_blank">Sam Levinson</a></li>
				<li><a href="http://www.threeidenticalstrangers.com/" target="_blank">Tim Wardle</a></li>
				<li><a href="">Todd Douglas Miller</a></li>
				<li><a href="">Tom Harper</a></li>
			</ul>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;