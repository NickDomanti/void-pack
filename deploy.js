import { Client } from 'basic-ftp'

const client = new Client()

await client.access({
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASS
})

console.log('\nDeploying to production...')
console.log('\x1b[32m%s\x1b[0m', '✓', 'Connected to FTP server')

await client.uploadFromDir('dist')
console.log('\x1b[32m%s\x1b[0m', '✓', 'Uploaded dist folder')

client.close()
console.log(
  '\n\x1b[32m%s\x1b[0m  %s \x1b[36m%s\x1b[0m',
  '➜',
  'Check webapp at',
  'https://void-pack.nickdomanti.com'
)
