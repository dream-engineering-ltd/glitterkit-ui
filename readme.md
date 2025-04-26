# glitterkit UI System

Generate flexible, custom components for any frontend.

- CLI based component generator
- Style syncing
- Framework agnostic
- Non magical
- Small

About glitterkit:

- Current list of components is small, but growing by the week
- React and Svelte components are currently supported
- Kit Store with pre-styled kits launching Summer 2025
- Non breaking changes are a high priority
- Your early feedback is wanted! Feel free to file a github issue

## Install

Install globally:
`npm i -g glitterkit`

Or keep it scoped to your local project by adding this to your package.json scripts:
`"glitterkit": "npx glitterkit",`

Get help:
`glitterkit help`

## Configure

Initialize with:
`glitterkit setup`

This generates a `glitterkit.toml` config file in your project root. You can specify:

- `base_dir`: directory for read-only base components
- `extended_dir`: which directory to extend base components
- `flavor`: generate component code using this framework + language
- `kit_id`: for syncing with glitterkit app (optional)

The custom component directory is where you can extend and/or compose base components for intricate customization.

On initialization, `glitterkit setup` will also create a read-only directory for the base components called `glitterkit`. These component files are NOT meant to be edited, and are simply for you to track style changes synced from the glitterkit app. Using the glitterkit app is optional, but it will allow you to buy pre-styled kits or customize the styles of your own kit.

## Adding base components

You can add components with `glitterkit add <component>`. Refer to the documentation for the full list of component names.

The component code will be generated in the base_dir, and is intended to be read-only. This code is copied into your project and is dependency free. It has several advantages:

- lightweight, does not add to node_modules
- ability to track history with git (or source control tools you already use)
- can still be updated/patched with latest version from CLI
- gives you full control

## Extending base components

`glitterkit extend <component>` will create a new file in the dir you specified in the glitterkit config file (extended_dir field).

This is useful for modifying the markup structure of complex components that are usually abstracted away in other popular libraries. You can also customize the logic and state.

## glitterkit app (targeting Oct 2025)

We are working on a Saas web app for customizing the styles of each component. You can publish a version and run `glitterkit sync` to pull down the style changes into your base components.

The style changes will also be reflected in components you have extended.

### Workflow

1. Developer uses glitterkit base components in project.
2. Developer/Designer/Stakeholder publishes style changes using glitterkit App (glitterkit-ui.com)
3. Developer syncs new style changes into local project and commits to source control.
4. Developer deploys new code as usual.

This workflow is designed to keep you in control of the code, while allowing stakeholders to change the appearance of components as they wish without introducing breaking changes. You are able to review all style changes and deploy at your discretion.

## Release progress for react

Rolling out weekly releases! What components would you like to see next? Drop a line in a github issue https://github.com/dream-engineering-ltd/glitterkit-ui

- [x] Button
- [x] Card
- [x] Badge
- [x] Input
- [x] Label
- [x] ProgressBar
- [x] Slider
- [x] Textarea
- [x] Checkbox
- [x] Switch
- [ ] Select
- [ ] Avatar
- [ ] Tooltip
- [ ] Rating
- [ ] Popover
- [ ] Accordion

## Learn more

Stay up to date via our newsletter https://glitterkit-ui.com
