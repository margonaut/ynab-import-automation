# YNAB Import Automation

A nightly cronjob that imports transactions into YNAB by fetching transaction alert emails.

## Todos

- [x] Empty TypeScript project setup
- [x] Manually create a Cloud Scheduler job + a Pub/Sub subscription and topic
- [ ] Set up a skeleton pipeline with GitHub actions
- [ ] Create Cloud Scheduler + PubSub resources via a terraform pipeline step
- [ ] Update pipeline to upload build for a Cloud Function
- [ ] Add Gmail email transaction importing (document email setup)
- [ ] Add YNAB expense creation

## Resources used

- [GCP Schedule and run a cron job](https://cloud.google.com/scheduler/docs/schedule-run-cron-job)
