import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type Query = {
  __typename?: 'Query';
  channels: Array<Channel>;
  channel?: Maybe<Channel>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryChannelArgs = {
  id: Scalars['ID'];
};

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['ID'];
  messages: Array<Message>;
  name: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  address?: Maybe<Address>;
};

export type Company = {
  __typename?: 'Company';
  name?: Maybe<Scalars['String']>;
  catchPhrase?: Maybe<Scalars['String']>;
  bs?: Maybe<Scalars['String']>;
};

export type Address = {
  __typename?: 'Address';
  street?: Maybe<Scalars['String']>;
  suite?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  geo?: Maybe<Location>;
};

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addChannel?: Maybe<Channel>;
  addMessage?: Maybe<Message>;
};


export type MutationAddChannelArgs = {
  name: Scalars['String'];
};


export type MutationAddMessageArgs = {
  message: MessageInput;
};

export type MessageInput = {
  channelId: Scalars['ID'];
  text: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messageAdded?: Maybe<Message>;
  channelAdded?: Maybe<Channel>;
};


export type SubscriptionMessageAddedArgs = {
  channelId: Scalars['ID'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email'>
  )>>> }
);

export const AllUsersDocument = gql`
    query allUsers {
  getUsers {
    name
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllUsersGQL extends Apollo.Query<AllUsersQuery, AllUsersQueryVariables> {
    document = AllUsersDocument;
    
  }