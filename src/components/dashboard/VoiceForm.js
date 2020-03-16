import React, { Component } from 'react';

class VoiceForm extends Component {
  render() {
    return (
      <div>
        <div className="container text-center mt-4">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <form>
                <div className="form-group">
                  <label htmlFor="rate" id="rate-pitch">Rate</label>
                  <div id="rate-value">{this.props.rate}</div>
                  <input onChange={this.props.onChange} name="rate" type="range" id="rate" className="custom-range"
                  min="0.5" max="2" defaultValue="1" step="0.5" />
                </div>
{/* PITCH */}
            <div className="form-group">
                  <label htmlFor="pitch" id="rate-pitch">Pitch</label>
                  <div id="pitch-value">{this.props.pitch}</div>
                  <input onChange={this.props.onChange} name="pitch" type="range" id="pitch" className="custom-range"
                  min="0" max="2" defaultValue="1" step="1" />
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoiceForm;
