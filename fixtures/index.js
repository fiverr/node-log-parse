module.exports = [
    [
        `# Time: 190227 9:46:00 # User@Host: rdsadmin[rdsadmin] @ localhost [] Id: 4069049 # Query_time: 0.000202 Lock_time: 0.000077 Rows_sent: 1 Rows_examined: 1 SET timestamp=1551260760; SELECT count(*) from mysql.rds_replication_status WHERE action = "reset slave" and master_host is NULL and master_port is NULL ORDER BY action_timestamp LIMIT 1;`,
        {
            user: 'rdsadmin',
            host: 'localhost',
            ip: '',
            id: '4069049',
            duration: 0.000202,
            lock_wait: 0.000077,
            rows_sent: 1,
            rows_examined: 1,
            timestamp: 1551260760000,
            query: 'SELECT count(*) from mysql.rds_replication_status WHERE action = "reset slave" and master_host is NULL and master_port is NULL ORDER BY action_timestamp LIMIT 1',
        },
    ],
    [
        `# Time: 190227 9:46:00 # User@Host: rdsadmin[rdsadmin] @ localhost [172.16.0.12] Id: 4069049 # Query_time: 0.000202 Lock_time: 0.000077 Rows_sent: 1 Rows_examined: 1 SET timestamp=1551260760; SELECT count(*) from mysql.rds_replication_status WHERE action = 'reset slave' and master_host is NULL and master_port is NULL ORDER BY action_timestamp LIMIT 1;`,
        {
            user: 'rdsadmin',
            host: 'localhost',
            ip: '172.16.0.12',
            id: '4069049',
            duration: 0.000202,
            lock_wait: 0.000077,
            rows_sent: 1,
            rows_examined: 1,
            timestamp: 1551260760000,
            query: `SELECT count(*) from mysql.rds_replication_status WHERE action = 'reset slave' and master_host is NULL and master_port is NULL ORDER BY action_timestamp LIMIT 1`,
        },
    ],
    [
        `2019-04-18T08:55:36.001Z   465aa33d-83d4-4ac3-8198-d94e19993b25    # Time: 190418 8:55:34 # User@Host: root[root] @ [172.30.0.229] Id: 19348 # Query_time: 3.000551 Lock_time: 0.000000 Rows_sent: 1 Rows_examined: 0 SET timestamp=1555577734; select sleep(3);`,
        {
            user: 'root',
            host: '',
            ip: '172.30.0.229',
            id: '19348',
            duration: 3.000551,
            lock_wait: 0,
            rows_sent: 1,
            rows_examined: 0,
            timestamp: 1555577734000,
            query: `select sleep(3)`,
        },
    ],
    [
        `2019-04-18T08:55:36.001Z
465aa33d-83d4-4ac3-8198-d94e19993b25
# Time: 190418 8:55:34
# User@Host: root[root] @ [172.30.0.229] Id: 19348
# Query_time: 3.000551 Lock_time: 0.000000 Rows_sent: 1 Rows_examined: 0 SET timestamp=1555577734;
select sleep(3);`,
        {
            user: 'root',
            host: '',
            ip: '172.30.0.229',
            id: '19348',
            duration: 3.000551,
            lock_wait: 0,
            rows_sent: 1,
            rows_examined: 0,
            timestamp: 1555577734000,
            query: `select sleep(3)`,
        },
    ],
];
