import {defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Job Title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'company', title: 'Company', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {list: ['Finance', 'Compliance', 'Accounting', 'Legal', 'Other']},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {list: ['Full-time', 'Part-time', 'Internship', 'Contract']},
      initialValue: 'Full-time',
    }),
    defineField({name: 'location', title: 'Location', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'workStyle',
      title: 'Work Style',
      type: 'string',
      options: {list: ['On-site', 'Hybrid', 'Remote']},
      initialValue: 'On-site',
    }),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'requirements', title: 'Requirements', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'applyUrl', title: 'Apply URL', type: 'url', validation: (r) => r.required()}),
    defineField({name: 'postedAt', title: 'Posted At', type: 'datetime', validation: (r) => r.required()}),
    defineField({name: 'active', title: 'Active (show on site)', type: 'boolean', initialValue: true}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'company', active: 'active'},
    prepare({title, subtitle, active}) {
      return {title: active ? title : `[INACTIVE] ${title}`, subtitle}
    },
  },
})
