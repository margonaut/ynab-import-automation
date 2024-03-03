# YNAB Import Automation

A nightly cronjob that imports transactions into YNAB by fetching transaction alert emails.

## Todos

- [x] Empty TypeScript project setup
- [x] Manually create a Cloud Scheduler job + a Pub/Sub subscription and topic
- [ ] Set up a skeleton pipeline with GitHub actions
- [ ] Write a terraform file to create GCP resources
- [ ] Apply terraform file via a pipeline step
- [ ] Update pipeline to upload build for a Cloud Function
- [ ] Add Gmail email transaction importing (document email setup)
- [ ] Add YNAB expense creation

## Quick Links

- [GCP Cloud Scheduler Console](https://console.cloud.google.com/cloudscheduler)
- [GCP Pub/Sub Topics](https://console.cloud.google.com/cloudpubsub/subscription/list)
- [GCP Pub/Sub Subscriptions](https://console.cloud.google.com/cloudpubsub/subscription/list)

## Resources used

### References

- [GCP Schedule and run a cron job](https://cloud.google.com/scheduler/docs/schedule-run-cron-job)
- [Gmail API JavaScript docs](https://developers.google.com/gmail/api/quickstart/js)
- [YNAB API Docs](https://api.ynab.com/)
- [GCP Terraform Tutorial](https://cloud.google.com/functions/docs/tutorials/terraform)

### GCP services

- **Definite:** Cloud Scheduler, Pub/Sub, Cloud Functions

- **Probably:** Cloud Registry, Secret Manager
