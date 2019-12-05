const request = require('request');
class Index {
    constructor() {}
    getAllCluster(req, res) {
        const url = `http://mcloud.missfresh.net/api/getAllCluster`;
        request({
            url: url,
            method: "GET",
            headers: {
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getClusterInfo(req, res) {
        const url = `http://mcloud.missfresh.net/api/${req.query.name}/info`;
        request({
            url: url,
            method: "GET",
            headers: {
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    queryNsList(req, res) {
        const url = `http://mcloud.missfresh.net/api/${req.query.name}/ns/get`;
        request({
            url: url,
            method: "GET",
            headers: {
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    traintNode(req, res) {
        const url = 'http://mcloud.missfresh.net/traintNode';
        request({
            url: url,
            method: "POST",
            headers: {
                "Cookie": `_cluster=${req.body.params.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body.params.body)
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    untraintNode(req, res) {
        const url = 'http://mcloud.missfresh.net/untraintNode';
        request({
            url: url,
            method: "POST",
            headers: {
                "Cookie": `_cluster=${req.body.params.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body.params.body)
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    deleteLabel(req, res) {
        const url = 'http://mcloud.missfresh.net/deleteLabel';
        request({
            url: url,
            method: "POST",
            headers: {
                "Cookie": `_cluster=${req.body.params.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body.params.body)
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    addLabel(req, res) {
        const url = 'http://mcloud.missfresh.net/addLabel';
        request({
            url: url,
            method: "POST",
            headers: {
                "Cookie": `_cluster=${req.body.params.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body.params.body)
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    node(req, res) {
        const url = 'http://mcloud.missfresh.net/nodes';
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    descNode(req, res) {
        const url = `http://mcloud.missfresh.net/descNode?node=${req.query.node}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": "_cluster=TC; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==",
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getNode(req, res) {
        const url = `http://mcloud.missfresh.net/getNode?node=${req.query.node}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": "_cluster=TC; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==",
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    pods(req, res) {
        const url = `http://mcloud.missfresh.net/pods?ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    podLogs(req, res) {
        const url = `http://mcloud.missfresh.net/podLogs?pod=${req.query.pod}&ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    descPod(req, res) {
        const url = ` http://mcloud.missfresh.net/descPod?pod=${req.query.pod}&ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getPod(req, res) {
        const url = ` http://mcloud.missfresh.net/getPod?pod=${req.query.pod}&ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getListEv(req, res) {
        const url = 'http://mcloud.missfresh.net/getList/ev';
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getYamlEv(req, res) {
        const url = `http://mcloud.missfresh.net/getYaml/ev?name=${req.query.name}&ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getworkload(req, res) {
        const url = `http://mcloud.missfresh.net/getList/${req.query.type}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getworkloadDes(req, res) {
        const url = `http://mcloud.missfresh.net/desc/${req.query.type}?name=${req.query.name}&ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getworkloadYaml(req, res) {
        const url = `http://mcloud.missfresh.net/getYaml/${req.query.type}?name=${req.query.name}&ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getConfigList(req, res) {
        const url = `http://mcloud.missfresh.net/getList/${req.query.type}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getConfigDesc(req, res) {
        const url = `http://mcloud.missfresh.net/desc/${req.query.type}?name=${req.query.name}&ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getConfigYaml(req, res) {
        const url = `http://mcloud.missfresh.net/getYaml/${req.query.type}?name=${req.query.name}&ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    uploadYaml(req, res) {
        const url = 'http://mcloud.missfresh.net/uploadYaml';
        request({
            url: url,
            method: "POST",
            headers: {
                "Cookie": `_cluster=${req.body.params.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body.params.body)
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    deleteMutil(req, res) {
        const url = `http://mcloud.missfresh.net/deleteAll/${req.body.params.type}`;
        request({
            url: url,
            method: "POST",
            headers: {
                "Cookie": `_cluster=${req.body.params.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body.params.body)
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getServerList(req, res) {
        const url = `http://mcloud.missfresh.net/getList/${req.query.type}?ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getServerDesc(req, res) {
        const url = `http://mcloud.missfresh.net/desc/${req.query.type}?name=${req.query.name}&ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
    getServerConfig(req, res) {
        const url = `http://mcloud.missfresh.net/getYaml/${req.query.type}?name=${req.query.name}&ns=${req.query.ns}`;
        request({
            url: url,
            method: "GET",
            headers: {
                "Cookie": `_cluster=${req.query.colony}; _xiuhasd=0a0204d700000005d81d32e9b8f1a254; _ipwpoii=1568789294; _xjiojawdoh=kAwUfkjVGV7xQWCjk8Po1w==`,
                "User-Agent": "",
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            } else {
                res.send({
                    errno: 1,
                    error: 'error:' + error + ',response-code:' + response.statusCode
                });
            }
        });
    }
}
module.exports = Index;