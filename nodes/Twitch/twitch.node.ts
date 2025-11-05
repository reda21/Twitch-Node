import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Twitch implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Twitch',
		name: 'twitch',
		icon: 'file:twitch.svg',
		version: 1,
		usableAsTool: true,
		description: 'Basic Twitch Node',
		group: ['trigger'],
		properties: [
			{
				displayName: 'Twitch User',
				name: 'username',
				type: 'string',
				default: 'grafikart',
				description: 'User to retrive message from',
			},
		],
		inputs: [],
		outputs: ['main'],
		defaults: {
			name: 'Twitch',
		},
	};
}
