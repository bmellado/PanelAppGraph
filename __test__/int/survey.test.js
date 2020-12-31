const { gql } = require('apollo-server-core');
const { mutateConstructor } = require('../utils');

const CREATE_SURVEY = gql`
  mutation createSurvey($input: CreateSurveyInput!) {
    createSurvey(input: $input) {
      id
      admin {
        id
        userId
        firstName
        lastName
        institution
      }
      description
      expirationDate
      name
      qualtricsLink
      releaseDate
    }
  }
`;

describe('Survey mutation integration test', () => {
  const completeCreateMutation = {
    mutation: CREATE_SURVEY,
    variables: {
      input: {
        adminId: 1,
        description: 'Una encuesta sobre alcaldes',
        expirationDate: '2020-09-26',
        name: 'Encuesta alcaldes',
        qualtricsLink: 'https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_eRuHtPivdKZ9IIl',
        releaseDate: '2020-09-05',
      },
    },
  };

  const incompleteCreateMutation = {
    mutation: CREATE_SURVEY,
    variables: {
      input: {
        adminId: 1,
        description: 'Una encuesta sobre alcaldes',
        expirationDate: '2020-09-26',
        qualtricsLink: 'https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_eRuHtPivdKZ9IIl',
        releaseDate: '2020-09-05',
      },
    },
  };

  const nonQualtricsCreateMutation = {
    mutation: CREATE_SURVEY,
    variables: {
      input: {
        adminId: 1,
        description: 'Una encuesta sobre alcaldes',
        expirationDate: '2020-09-26',
        name: 'Encuesta alcaldes',
        qualtricsLink: 'https://forms.gle/K7QGahJbLyCy98FJ6',
        releaseDate: '2020-09-05',
      },
    },
  };

  const prevReleaseDateCreateMutation = {
    mutation: CREATE_SURVEY,
    variables: {
      input: {
        adminId: 1,
        description: 'Una encuesta sobre alcaldes',
        expirationDate: '2020-09-26',
        name: 'Encuesta alcaldes',
        qualtricsLink: 'https://forms.gle/K7QGahJbLyCy98FJ6',
        releaseDate: '2020-03-05',
      },
    },
  };

  const prevExpirationDateCreateMutation = {
    mutation: CREATE_SURVEY,
    variables: {
      input: {
        adminId: 1,
        description: 'Una encuesta sobre alcaldes',
        expirationDate: '2020-08-26',
        name: 'Encuesta alcaldes',
        qualtricsLink: 'https://forms.gle/K7QGahJbLyCy98FJ6',
        releaseDate: '2020-09-05',
      },
    },
  };

  test('survey is created correctly', async () => {
    const mutation = mutateConstructor({ userId: 1 });
    const res = await mutation(completeCreateMutation);
    expect(res.data.createSurvey).toEqual(
      expect.objectContaining({
        admin: expect.objectContaining({
          id: 1,
        }),
        description: 'Una encuesta sobre alcaldes',
        expirationDate: '2020-09-26',
        name: 'Encuesta alcaldes',
        qualtricsLink: 'https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_eRuHtPivdKZ9IIl',
        releaseDate: '2020-09-05',
      }),
    );
  });

  test('check if any mutation fields are empty', async () => {
    const mutation = mutateConstructor({ userId: 1 });
    const res = await mutation(incompleteCreateMutation);
    expect(res.errors[0].message).toEqual('Empty fields for survey creation.');
  });

  test('check if survey link is from qualtrics', async () => {
    const mutation = mutateConstructor({ userId: 1 });
    const res = await mutation(nonQualtricsCreateMutation);
    expect(res.errors[0].message).toEqual('Link for survey is not from qualtrics.');
  });

  test('check if release date is later than when it was created', async () => {
    const mutation = mutateConstructor({ userId: 1 });
    const res = await mutation(prevReleaseDateCreateMutation);
    expect(res.errors[0].message).toEqual('Release date is invalid.');
  });

  test('check if expiration date is later than release date', async () => {
    const mutation = mutateConstructor({ userId: 1 });
    const res = await mutation(prevExpirationDateCreateMutation);
    expect(res.errors[0].message).toEqual('Expiration date must be later than release date.');
  });
});
