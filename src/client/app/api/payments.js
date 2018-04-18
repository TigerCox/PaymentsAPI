import {updateSession} from '../actions/sessionActions';

const ROOT_URI = 'https://qa1-api.dtdrs.dealertrack.com/rest';


class payments {
	constructor(dispatch) {
		this.dispatch = dispatch;
	}

  updateRequest(id, json) {
    if (id == null) {
      this.createSession(json);
    } else {
      this.updateSession(id, json);
    }
  }

  createSession(json) {
    fetch((ROOT_URI + '/session'), {
        method: 'POST',
				headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			  },
        body: JSON.stringify(json)
      }).then(
				response =>  response.json()
			).then((body) => {
        this.getSession(body.id);
      });
  }

  updateSession(id, json) {
    fetch((ROOT_URI + '/session/' + id + '/payment/request'), {
        method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
        body: JSON.stringify(json)
      }).then(() =>  {
				this.getSession(id);
			});
  }

  getSession(id) {
    fetch((ROOT_URI + '/session/' + id), {
        method: 'GET'
      }).then(
				response =>  response.json()
			).then((body) => {
        this.updateLocalSession(body);
      });
  }

  updateLocalSession(json) {
		console.log("Update Session: " + JSON.stringify(json))
    this.dispatch(updateSession(json));
  }
}

export default payments;
