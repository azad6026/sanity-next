export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6326afe941b1716887238c4f',
                  title: 'Sanity Studio',
                  name: 'sanity-next-studio-pk19j13n',
                  apiId: '7ba2d367-1507-4b3a-8ee9-f7b809d45a1a'
                },
                {
                  buildHookId: '6326afe92139ab5fed8d33e3',
                  title: 'Landing pages Website',
                  name: 'sanity-next-web-e9pn6y4r',
                  apiId: '686a909f-6b73-4755-91b8-317fc6728671'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/azad6026/sanity-next',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-next-web-e9pn6y4r.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
