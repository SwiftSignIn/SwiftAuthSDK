import axios from 'axios';

class SwiftAuth {
    constructor(config) {
        this.config = config;
        this.state = {
            uniqueId: null,
            qrCode: null,
            isAuthenticated: false,
            isPairing: false,
        };
        this.client = axios.create({
            baseURL: config.host,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Basic ${Buffer.from(`${config.clientId}:${config.clientSecret}`).toString('base64')}`,
            },
          });
    }

    async generateAuthRequest() {
        try {
            const response = await this.client.post(this.config.generateAuthRequestUrl);

            const data = response.data;

            this.state.uniqueId = data.uniqueId;
            this.state.qrCode = data.qrCode;
            
            return this.state;
        } catch (error) {
            console.error('Error generating auth request:', error);
            throw error;
        }
    }

    async pollForAuthStatus() {
        try {
            const response = await this.client.get(`${this.config.pollForAuthStatusUrl}?uniqueId=${this.state.uniqueId}`);

            const data = response.data;

            this.state.isAuthenticated = data.success;

            return this.state;
        } catch (error) {
            console.error('Error polling for auth status:', error);
            throw error;
        }
    }
}

export default SwiftAuth;
