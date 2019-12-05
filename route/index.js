const express = require('express');
const router = express.Router();
const indexController = require('../controller/index');


const indexInstance = new indexController();
router.get('/getAllCluster', indexInstance.getAllCluster);
router.get('/getClusterInfo', indexInstance.getClusterInfo);
router.get('/queryNsList', indexInstance.queryNsList);
router.get('/node', indexInstance.node);
router.get('/pods', indexInstance.pods);
router.get('/podLogs', indexInstance.podLogs);
router.get('/descPod', indexInstance.descPod);
router.get('/getPod', indexInstance.getPod);
router.get('/descNode', indexInstance.descNode);
router.get('/getNode', indexInstance.getNode);
router.get('/getListEv', indexInstance.getListEv);
router.get('/getYamlEv', indexInstance.getYamlEv);
router.post('/addLabel', indexInstance.addLabel);
router.post('/deleteLabel', indexInstance.deleteLabel);
router.post('/traintNode', indexInstance.traintNode);
router.post('/untraintNode', indexInstance.untraintNode);
router.get('/getWorkload', indexInstance.getworkload);
router.get('/getworkloadDes', indexInstance.getworkloadDes);
router.get('/getworkloadYaml', indexInstance.getworkloadYaml);
router.get('/getConfigList', indexInstance.getConfigList);
router.get('/getConfigDesc', indexInstance.getConfigDesc);
router.get('/getConfigYaml', indexInstance.getConfigYaml);
router.post('/uploadYaml', indexInstance.uploadYaml);
router.post('/deleteMutil', indexInstance.deleteMutil);
router.get('/getServerList', indexInstance.getServerList);
router.get('/getServerDesc', indexInstance.getServerDesc);
router.get('/getServerConfig', indexInstance.getServerConfig);



module.exports = router;