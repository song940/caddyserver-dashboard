import CaddyServer from 'caddyserver';

export const caddy = new CaddyServer({
    host: `http://localhost:8000/api/caddy`
});
