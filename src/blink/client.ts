import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'clarity-rx-nms-revenue-recovery-xk2wsqhv',
  authRequired: false // Set to false for landing page, can be enabled for protected features
})

export default blink