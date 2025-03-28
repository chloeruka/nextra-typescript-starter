import nextra from "nextra"

const withNextra = nextra({
  search: true,
  defaultShowCopyCode: true,
  // ... Other Nextra config options
})
const nextConfig = withNextra({
  // ... Other Next.js config options
})

export default nextConfig;
