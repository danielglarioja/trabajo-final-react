const base = process.env.REACT_APP_API_BASE_URL;

const routes = {
    path1: () => `${base}/`,
    path2: () => `${base}/resources`,
    path3: (id) => `${base}/resoures/${id}`,
    sample: () => `${base}/users?page=2`
}

export default routes;