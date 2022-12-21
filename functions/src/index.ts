import * as functions from "firebase-functions";
import axios from 'axios';
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const getToken = functions.region('asia-south1').https.onRequest(async (request, response) => {
	return cors(request, response, async () => {
		try {
			const { body } = request;
			console.log('request data', body);

			//temporary disabling because of the api. 
			process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
			let res;
			try {
				res = await axios.post("https://n8n.happy-tech.in/w/get_arth_reward", {
					email: body.email,
					orgName: body.orgName,
					name: body.name,
					responses: body.responses,
				})
			} catch (error) {
				functions.logger.log('reward api error', error);
				response.json(error)
				return;
			}
			process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1'
			await admin.firestore().collection('/users').doc(body.email).set({
				email: body.email,
				orgName: body.orgName || "",
				name: body.name || "",
				responses: body.responses,
				reward: res?.data.reward,
			});
			response.json(res?.data);
			return;

		} catch (error) {
			//log error using firebase
			functions.logger.log('error', error);
			response.json(error)
			return;
		}
	})

});
