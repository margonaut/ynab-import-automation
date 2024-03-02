/**
 * This script tests basic interactions with the Gmail API
 *
 * Example Usage:
 * > npx ts-node src/scripts/gmailRequestTest.ts"
 *
 */

const main = async () => {
  console.log('script setup check')
}

// Execute:
main()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
