import React from 'react'
import ReactDom from 'react-dom'
import ModelTest from '../g6-test/mock/model-test'
import ModuleTest from '../g6-test/mock/module-test'
import WebPdm from '../../src'
import CodePdm from '../../../../docs/type-erd'
import { toModels, toModules } from '../g6-test/trantor/datamap'
import TestModel from '../g6-test/trantor/mock/models-data.json'
import TestModule from '../g6-test/trantor/mock/modules-data.json'
import Models from '../g6-test/trantor/model'
import Modules from '../g6-test/trantor/module'
const models = toModels(TestModel.res.map(a=>a.model))
const modules = toModules(TestModule.res)
import { Input, Button, Dropdown, Menu, Select, Tooltip, Tree, Popover } from '@terminus/nusi'
import './style.less'
const components = {
  Input, Button, Dropdown, Menu, Select, Tooltip, Tree, Popover
}

// alert(models.length)
//        //if() return fPre

function confirmEnding(str, target) {
  // 请把你的代码写在这里
  if(str.substr(str.length-target.length,target.length)==target)
    return true;
  else 
    return false;
}

const onIgnoreEdge = (field ) => {
   return field?.typeMeta?.relationModel === 'base_User' && (confirmEnding(field.name, 'createdBy') || confirmEnding(field.name,'updatedBy')  ) 
}
ReactDom.render(
  <WebPdm themeColor='green' darkness={false} components={components} models={models} modules={modules} erdkey={'demo'} onModelDetail={(a) => alert(JSON.stringify(a))} onIgnoreEdge={onIgnoreEdge} />, 
  document.getElementById('app')||document.getElementById('root')
)
