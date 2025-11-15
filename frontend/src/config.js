let config = {}

if (process.env.NODE_ENV === "development") {
    // 👇 直接指向远程后端完整 API 地址（含 /api！）
    config.BASE_URL = "http://202.114.212.194:8004/api"
} else {
    config.BASE_URL = "/api"
}

config.TASKS_URL = config.BASE_URL + "/tasks"
config.TASKS_STATUS_SUFFIX = "/status"

export default config;
