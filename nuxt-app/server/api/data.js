export default defineEventHandler((event) => {
    // It return 
    const config = useRuntimeConfig()

    const endpoint = config.Endpoint
    const appSecret = config.appSecret
    const appKey = config.appKey
    const appToken = config.appToken
    const mailUsername = config.mailUsername
    const mailPassword = config.mailPassword

    return {
        endpoint,
        appSecret,
        appKey,
        appToken,
        mailUsername,
        mailPassword
    }
})

// Use it as give here...
// const { data } = await useFetch("/api/data");
