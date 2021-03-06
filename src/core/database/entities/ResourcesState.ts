import mongoose, { Schema, Document } from 'mongoose'

export interface IResourcesRoute {
  source: string
  collector: number
  peer: number
  path: number[]
  prepend: boolean
  community: string[]
  live?: boolean
}

export interface IResourcesState extends Document {
  resources: string[]
  collectors: number[]
  routes: IResourcesRoute[]
  prepends: number
  timestamp: number
  queriedAt: number
  live: boolean
  createdAt?: Date
  updatedAt?: Date
}

const ResourcesStateSchema = new Schema(
  {
    resources: {
      type: [String],
      required: true
    },
    collectors: {
      type: [Number],
      required: true
    },
    routes: {
      type: [
        {
          _id: false,
          source: {
            type: String,
            required: true
          },
          collector: {
            type: Number,
            required: true
          },
          peer: {
            type: Number,
            required: true
          },
          path: {
            type: [Number],
            required: true
          },
          prepend: {
            type: Boolean,
            required: true
          },
          community: {
            type: [String],
            required: true
          }
        }
      ],
      required: true
    },
    prepends: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Number,
      required: true
    },
    queriedAt: {
      type: Number,
      required: true
    },
    live: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export const ResourcesState = mongoose.model<IResourcesState>(
  'ResourcesState',
  ResourcesStateSchema
)
