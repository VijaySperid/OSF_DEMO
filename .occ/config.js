module.exports = {
  "httpHost": "localhost",
  "httpPort": 80,
  "httpsHost": "localhost",
  "httpsPort": 443,
  "sslKey": "config/ssl/key.pem",
  "sslCert": "config/ssl/cert.pem",
  "serverEnv": "development",
  "appName": "osf-storefront",
  "dsAssetMode": "local",
  "verbose": false,
  "live": false,
  "appContext": "development",
  "userName": "vijay.hegde",
  "backup": true,
  "serverConfig": {
    "development": {
      "appServerAdmin": "https://a7892050c1dev-admin.occa.ocs.oraclecloud.com",
      "appServer": "http://localhost:8080",
      "appKey": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMDNmZDdjYy0xYzNhLTRjZjgtODc5OS1jNDYxYzE1NDAxN2MiLCJpc3MiOiJhcHBsaWNhdGlvbkF1dGgiLCJleHAiOjE2NTA5ODU2MzQsImlhdCI6MTYxOTQ0OTYzNH0=.dHc6edxuLDL1hAbWQiNv+KE36MkDjDCUr8NA4J1YM54="
    },
    "test": {
      "appServerAdmin": "http://testadminserver.example.com:9080",
      "appServer": "http://testserver.example.com:9080"
    },
    "production": {
      "appServerAdmin": "http://prodadminserver.example.com:9080",
      "appServer": "http://prodserver.example.com:9080"
    }
  }
};