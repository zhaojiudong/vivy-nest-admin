import { ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components'
import type { DefaultOptionType } from 'antd/es/select'

const templateOptions: DefaultOptionType[] = [
  {
    value: '1',
    label: '单表（增删改查）',
  },
]

const UpdateFormBase: React.FC = () => {
  return (
    <>
      <ProFormText name="tableName" label="表名称" rules={[{ required: true }]} />
      <ProFormText name="tableComment" label="表描述" rules={[{ required: true }]} />
      <ProFormText name="className" label="实体类名称" rules={[{ required: true }]} />
      <ProFormSelect name="templateCategory" label="生成模板" rules={[{ required: true }]} options={templateOptions} />
      <ProFormText name="businessName" label="生成业务名" rules={[{ required: true }]} />
      <ProFormText name="functionName" label="生成功能名" rules={[{ required: true }]} />
      <ProFormText name="functionAuthor" label="生成作者名" rules={[{ required: true }]} />
      <ProFormTextArea name="remark" label="备注" />
    </>
  )
}

export default UpdateFormBase
